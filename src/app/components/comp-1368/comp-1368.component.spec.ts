/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1368Component } from './comp-1368.component';

describe('Comp1368Component', () => {
  let component: Comp1368Component;
  let fixture: ComponentFixture<Comp1368Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1368Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1368Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
