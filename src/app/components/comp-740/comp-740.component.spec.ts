/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp740Component } from './comp-740.component';

describe('Comp740Component', () => {
  let component: Comp740Component;
  let fixture: ComponentFixture<Comp740Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp740Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp740Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
