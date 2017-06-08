/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4234Component } from './comp-4234.component';

describe('Comp4234Component', () => {
  let component: Comp4234Component;
  let fixture: ComponentFixture<Comp4234Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4234Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4234Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
