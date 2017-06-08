/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2769Component } from './comp-2769.component';

describe('Comp2769Component', () => {
  let component: Comp2769Component;
  let fixture: ComponentFixture<Comp2769Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2769Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2769Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
