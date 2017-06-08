/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp726Component } from './comp-726.component';

describe('Comp726Component', () => {
  let component: Comp726Component;
  let fixture: ComponentFixture<Comp726Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp726Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp726Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
