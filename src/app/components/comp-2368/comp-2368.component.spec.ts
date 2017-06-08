/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2368Component } from './comp-2368.component';

describe('Comp2368Component', () => {
  let component: Comp2368Component;
  let fixture: ComponentFixture<Comp2368Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2368Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2368Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
