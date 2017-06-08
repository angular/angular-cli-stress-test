/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2553Component } from './comp-2553.component';

describe('Comp2553Component', () => {
  let component: Comp2553Component;
  let fixture: ComponentFixture<Comp2553Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2553Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2553Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
