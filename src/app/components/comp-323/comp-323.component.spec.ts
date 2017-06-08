/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp323Component } from './comp-323.component';

describe('Comp323Component', () => {
  let component: Comp323Component;
  let fixture: ComponentFixture<Comp323Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp323Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp323Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
