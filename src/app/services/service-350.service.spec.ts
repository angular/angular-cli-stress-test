/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service350Service } from './service-350.service';

describe('Service350Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service350Service]
    });
  });

  it('should ...', inject([Service350Service], (service: Service350Service) => {
    expect(service).toBeTruthy();
  }));
});
