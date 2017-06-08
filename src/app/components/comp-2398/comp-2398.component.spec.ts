/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2398Component } from './comp-2398.component';

describe('Comp2398Component', () => {
  let component: Comp2398Component;
  let fixture: ComponentFixture<Comp2398Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2398Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2398Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
