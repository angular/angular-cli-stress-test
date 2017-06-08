/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2965Component } from './comp-2965.component';

describe('Comp2965Component', () => {
  let component: Comp2965Component;
  let fixture: ComponentFixture<Comp2965Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2965Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2965Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
