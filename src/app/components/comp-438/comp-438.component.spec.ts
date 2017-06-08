/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp438Component } from './comp-438.component';

describe('Comp438Component', () => {
  let component: Comp438Component;
  let fixture: ComponentFixture<Comp438Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp438Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp438Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
