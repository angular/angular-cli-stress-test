/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2132Component } from './comp-2132.component';

describe('Comp2132Component', () => {
  let component: Comp2132Component;
  let fixture: ComponentFixture<Comp2132Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2132Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2132Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
