/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2929Component } from './comp-2929.component';

describe('Comp2929Component', () => {
  let component: Comp2929Component;
  let fixture: ComponentFixture<Comp2929Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2929Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2929Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
