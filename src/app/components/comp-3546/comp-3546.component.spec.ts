/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3546Component } from './comp-3546.component';

describe('Comp3546Component', () => {
  let component: Comp3546Component;
  let fixture: ComponentFixture<Comp3546Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3546Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3546Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
