/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2442Component } from './comp-2442.component';

describe('Comp2442Component', () => {
  let component: Comp2442Component;
  let fixture: ComponentFixture<Comp2442Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2442Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2442Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
