/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2994Component } from './comp-2994.component';

describe('Comp2994Component', () => {
  let component: Comp2994Component;
  let fixture: ComponentFixture<Comp2994Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2994Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2994Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
