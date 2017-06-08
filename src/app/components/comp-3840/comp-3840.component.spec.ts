/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3840Component } from './comp-3840.component';

describe('Comp3840Component', () => {
  let component: Comp3840Component;
  let fixture: ComponentFixture<Comp3840Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3840Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3840Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
