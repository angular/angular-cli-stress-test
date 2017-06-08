/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2402Component } from './comp-2402.component';

describe('Comp2402Component', () => {
  let component: Comp2402Component;
  let fixture: ComponentFixture<Comp2402Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2402Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2402Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
