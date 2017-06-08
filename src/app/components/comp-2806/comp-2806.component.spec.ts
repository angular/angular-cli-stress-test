/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2806Component } from './comp-2806.component';

describe('Comp2806Component', () => {
  let component: Comp2806Component;
  let fixture: ComponentFixture<Comp2806Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2806Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2806Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
