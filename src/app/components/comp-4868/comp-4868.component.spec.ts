/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4868Component } from './comp-4868.component';

describe('Comp4868Component', () => {
  let component: Comp4868Component;
  let fixture: ComponentFixture<Comp4868Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4868Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4868Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
