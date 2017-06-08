/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp989Component } from './comp-989.component';

describe('Comp989Component', () => {
  let component: Comp989Component;
  let fixture: ComponentFixture<Comp989Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp989Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp989Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
