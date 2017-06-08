/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2593Component } from './comp-2593.component';

describe('Comp2593Component', () => {
  let component: Comp2593Component;
  let fixture: ComponentFixture<Comp2593Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2593Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2593Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
