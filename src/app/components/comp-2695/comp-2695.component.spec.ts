/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2695Component } from './comp-2695.component';

describe('Comp2695Component', () => {
  let component: Comp2695Component;
  let fixture: ComponentFixture<Comp2695Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2695Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2695Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
