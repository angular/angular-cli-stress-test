/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2629Component } from './comp-2629.component';

describe('Comp2629Component', () => {
  let component: Comp2629Component;
  let fixture: ComponentFixture<Comp2629Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2629Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2629Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
