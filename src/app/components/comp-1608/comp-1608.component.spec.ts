/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1608Component } from './comp-1608.component';

describe('Comp1608Component', () => {
  let component: Comp1608Component;
  let fixture: ComponentFixture<Comp1608Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1608Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1608Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
