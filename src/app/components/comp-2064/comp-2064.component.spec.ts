/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2064Component } from './comp-2064.component';

describe('Comp2064Component', () => {
  let component: Comp2064Component;
  let fixture: ComponentFixture<Comp2064Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2064Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2064Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
