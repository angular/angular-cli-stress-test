/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4144Component } from './comp-4144.component';

describe('Comp4144Component', () => {
  let component: Comp4144Component;
  let fixture: ComponentFixture<Comp4144Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4144Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4144Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
