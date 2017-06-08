/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2336Component } from './comp-2336.component';

describe('Comp2336Component', () => {
  let component: Comp2336Component;
  let fixture: ComponentFixture<Comp2336Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2336Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2336Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
