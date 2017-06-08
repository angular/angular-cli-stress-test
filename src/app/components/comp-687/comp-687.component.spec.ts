/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp687Component } from './comp-687.component';

describe('Comp687Component', () => {
  let component: Comp687Component;
  let fixture: ComponentFixture<Comp687Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp687Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp687Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
