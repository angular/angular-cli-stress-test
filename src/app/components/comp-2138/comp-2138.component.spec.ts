/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2138Component } from './comp-2138.component';

describe('Comp2138Component', () => {
  let component: Comp2138Component;
  let fixture: ComponentFixture<Comp2138Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2138Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2138Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
