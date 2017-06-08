/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service175Service } from './service-175.service';

describe('Service175Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service175Service]
    });
  });

  it('should ...', inject([Service175Service], (service: Service175Service) => {
    expect(service).toBeTruthy();
  }));
});
