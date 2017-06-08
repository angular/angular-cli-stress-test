/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3515Component } from './comp-3515.component';

describe('Comp3515Component', () => {
  let component: Comp3515Component;
  let fixture: ComponentFixture<Comp3515Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3515Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3515Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
