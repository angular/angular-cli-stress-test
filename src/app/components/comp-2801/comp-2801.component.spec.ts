/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2801Component } from './comp-2801.component';

describe('Comp2801Component', () => {
  let component: Comp2801Component;
  let fixture: ComponentFixture<Comp2801Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2801Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2801Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
