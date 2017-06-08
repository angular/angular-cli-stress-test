/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2409Component } from './comp-2409.component';

describe('Comp2409Component', () => {
  let component: Comp2409Component;
  let fixture: ComponentFixture<Comp2409Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2409Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2409Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
