/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2973Component } from './comp-2973.component';

describe('Comp2973Component', () => {
  let component: Comp2973Component;
  let fixture: ComponentFixture<Comp2973Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2973Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2973Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
