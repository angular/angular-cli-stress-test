/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1889Component } from './comp-1889.component';

describe('Comp1889Component', () => {
  let component: Comp1889Component;
  let fixture: ComponentFixture<Comp1889Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1889Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1889Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
