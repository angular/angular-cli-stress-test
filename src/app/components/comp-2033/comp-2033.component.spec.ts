/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2033Component } from './comp-2033.component';

describe('Comp2033Component', () => {
  let component: Comp2033Component;
  let fixture: ComponentFixture<Comp2033Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2033Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2033Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
