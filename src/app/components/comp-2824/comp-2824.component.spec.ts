/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2824Component } from './comp-2824.component';

describe('Comp2824Component', () => {
  let component: Comp2824Component;
  let fixture: ComponentFixture<Comp2824Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2824Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2824Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
