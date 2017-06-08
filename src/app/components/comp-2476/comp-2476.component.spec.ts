/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2476Component } from './comp-2476.component';

describe('Comp2476Component', () => {
  let component: Comp2476Component;
  let fixture: ComponentFixture<Comp2476Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2476Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2476Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
