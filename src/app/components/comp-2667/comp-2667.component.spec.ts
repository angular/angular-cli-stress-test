/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2667Component } from './comp-2667.component';

describe('Comp2667Component', () => {
  let component: Comp2667Component;
  let fixture: ComponentFixture<Comp2667Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2667Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2667Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
