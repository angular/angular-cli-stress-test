/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2968Component } from './comp-2968.component';

describe('Comp2968Component', () => {
  let component: Comp2968Component;
  let fixture: ComponentFixture<Comp2968Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2968Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2968Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
