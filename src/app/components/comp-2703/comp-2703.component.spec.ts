/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2703Component } from './comp-2703.component';

describe('Comp2703Component', () => {
  let component: Comp2703Component;
  let fixture: ComponentFixture<Comp2703Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2703Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2703Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
