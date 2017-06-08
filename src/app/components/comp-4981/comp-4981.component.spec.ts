/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4981Component } from './comp-4981.component';

describe('Comp4981Component', () => {
  let component: Comp4981Component;
  let fixture: ComponentFixture<Comp4981Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4981Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4981Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
