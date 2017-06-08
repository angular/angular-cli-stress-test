/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2268Component } from './comp-2268.component';

describe('Comp2268Component', () => {
  let component: Comp2268Component;
  let fixture: ComponentFixture<Comp2268Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2268Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2268Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
