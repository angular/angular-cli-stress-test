/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp752Component } from './comp-752.component';

describe('Comp752Component', () => {
  let component: Comp752Component;
  let fixture: ComponentFixture<Comp752Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp752Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp752Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
