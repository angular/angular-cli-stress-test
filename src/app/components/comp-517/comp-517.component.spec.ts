/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp517Component } from './comp-517.component';

describe('Comp517Component', () => {
  let component: Comp517Component;
  let fixture: ComponentFixture<Comp517Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp517Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp517Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
