/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp768Component } from './comp-768.component';

describe('Comp768Component', () => {
  let component: Comp768Component;
  let fixture: ComponentFixture<Comp768Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp768Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp768Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
