/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2983Component } from './comp-2983.component';

describe('Comp2983Component', () => {
  let component: Comp2983Component;
  let fixture: ComponentFixture<Comp2983Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2983Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2983Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
