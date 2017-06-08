/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4792Component } from './comp-4792.component';

describe('Comp4792Component', () => {
  let component: Comp4792Component;
  let fixture: ComponentFixture<Comp4792Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4792Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4792Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
