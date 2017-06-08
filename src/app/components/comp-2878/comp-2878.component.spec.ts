/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2878Component } from './comp-2878.component';

describe('Comp2878Component', () => {
  let component: Comp2878Component;
  let fixture: ComponentFixture<Comp2878Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2878Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2878Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
