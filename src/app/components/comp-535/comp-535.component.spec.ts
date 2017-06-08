/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp535Component } from './comp-535.component';

describe('Comp535Component', () => {
  let component: Comp535Component;
  let fixture: ComponentFixture<Comp535Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp535Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp535Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
