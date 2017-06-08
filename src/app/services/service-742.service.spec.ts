/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service742Service } from './service-742.service';

describe('Service742Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service742Service]
    });
  });

  it('should ...', inject([Service742Service], (service: Service742Service) => {
    expect(service).toBeTruthy();
  }));
});
